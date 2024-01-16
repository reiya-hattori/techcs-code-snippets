  /**
   * Read a spreadsheet.
   * @param {string} spreadsheetId
   * @param {string} range
   * @returns {Promise.<Array>}
   */
  /* @ts-ignore */
  export const read = async (spreadsheetId, range) => {
    /* @ts-ignore */
    const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });

    return sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    })
      /* @ts-ignore */
      .then(_.property('data.values'));
  };