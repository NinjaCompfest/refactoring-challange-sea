const parseCsvSync = require("csv-parse/lib/sync");
const fs = require("fs");
const path = require("path");

class FundingRaised {
  static readData = () => {
    const funding_file = "startup_funding.csv";
    const file_data = fs
      .readFileSync(path.join(__dirname, "..", funding_file))
      .toString();
    let csv_data = parseCsvSync(file_data);
    return csv_data;
  };

  static mapping = (row = []) => {
    let mapped = {};
    mapped.permalink = row[0];
    mapped.company_name = row[1];
    mapped.number_employees = row[2];
    mapped.category = row[3];
    mapped.city = row[4];
    mapped.state = row[5];
    mapped.funded_date = row[6];
    mapped.raised_amount = row[7];
    mapped.raised_currency = row[8];
    mapped.round = row[9];
    return mapped;
  };

  static filterData = (options = {}, csv_data = []) => {
    options.company_name &&
      (csv_data = csv_data.filter((row) => options.company_name == row[1]));

    options.city &&
      (csv_data = csv_data.filter((row) => options.city == row[4]));

    options.state &&
      (csv_data = csv_data.filter((row) => options.state == row[5]));

    options.round &&
      (csv_data = csv_data.filter((row) => options.round == row[9]));

    return csv_data;
  };

  static filterData = (options = {}, csv_data = []) => {
    options.company_name &&
      (csv_data = csv_data.filter((row) => options.company_name == row[1]));

    options.city &&
      (csv_data = csv_data.filter((row) => options.city == row[4]));

    options.state &&
      (csv_data = csv_data.filter((row) => options.state == row[5]));

    options.round &&
      (csv_data = csv_data.filter((row) => options.round == row[9]));

    return csv_data;
  };

  static where(options = {}) {
    let csv_data = this.readData();

    const funding_data = [];

    csv_data = this.filterData(options, csv_data);

    csv_data.forEach((row) => {
      const mapped = this.mapping(row);
      funding_data.push(mapped);
    });

    return funding_data;
  }

  static findBy(options = {}) {
    let csv_data = this.readData();

    csv_data = this.filterData(options, csv_data);
    const row = csv_data[0];
    return this.mapping(row);
  }
}

module.exports = FundingRaised;
