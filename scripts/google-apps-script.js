/**
 * GOOGLE APPS SCRIPT FOR FARAZ KHAN'S PORTFOLIO
 * ==============================================
 * This script receives contact inquiries from your Next.js portfolio
 * and appends them as new rows into your Google Sheet.
 *
 * HOW TO SET THIS UP (3 MINUTE SETUP):
 * 1. Open Google Sheets (https://sheets.new) and create a new blank spreadsheet.
 * 2. Name your spreadsheet (e.g. "Portfolio Inquiries").
 * 3. In the top menu, click Extensions > Apps Script.
 * 4. Replace any existing code in the editor with this entire file.
 * 5. Click the "Save" (floppy disk) icon or press Ctrl+S.
 * 6. Click "Deploy" (blue button at top right) > "New deployment".
 * 7. Click the gear icon next to "Select type" and choose "Web app".
 * 8. Fill in:
 *    - Description: "Portfolio Contact Form Webhook"
 *    - Execute as: "Me (your email)"
 *    - Who has access: "Anyone"   <--- IMPORTANT! Choose "Anyone", not "Only myself"
 * 9. Click "Deploy".
 * 10. Click "Authorize access", choose your Google account, and click "Allow"
 *     (If Google displays "Google hasn't verified this app", click "Advanced" -> "Go to Untitled project (unsafe)").
 * 11. Copy the "Web app URL" (it looks like: https://script.google.com/macros/s/AKfycb.../exec).
 * 12. Paste that URL into your `.env.local` file as:
 *     GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait up to 10 seconds for other concurrent writes to release
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName("Inquiries") || doc.getActiveSheet();

    // Auto-initialize header row if the sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message"]);
      var headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#B9F36A"); // Portfolio signature neon green
      headerRange.setFontColor("#171717");
      sheet.setFrozenRows(1);
    }

    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    var timestamp = new Date();
    var name = (data.name || "").toString().trim() || "N/A";
    var email = (data.email || "").toString().trim() || "N/A";
    var subject = (data.subject || "").toString().trim() || "N/A";
    var message = (data.message || "").toString().trim() || "N/A";

    // Append new lead / message row
    sheet.appendRow([timestamp, name, email, subject, message]);

    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Inquiry saved successfully",
        row: sheet.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// Simple health check endpoint when accessed via browser GET
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "alive",
      message: "Faraz Khan Portfolio Google Sheets Webhook is active and listening for POST inquiries."
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
