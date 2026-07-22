const fs = require('fs');

const originalData = JSON.parse(fs.readFileSync('cleaned_data.json', 'utf8'));

// The 19 approved re-released batches from 0721 FDA assessment
const rereleasedBatches = [
  "314-1150401", "318-1150415", "313-1150420", "314-1150425", "315-1150428", "316-1150504",
  "314-1150507", "316-1150515", "318-1150517", "314-1150518", "319-1150522", "314-1150608",
  "315-1150521", "319-1150609", "318-1150524", "315-1150614", "314-1150617", "316-1150623",
  "316-1150609"
];

// Prohibited / Banned batches (5+2+1 = 8 batches)
const prohibitedBatches = [
  "315-1150404", "318-1150406", "314-1150410", "315-1150510", "313-1150512",
  "313-1150408", "315-1150413", "319-1150613"
];

// Unshipped batches (3 batches)
const unshippedBatches = ["315-1150626", "313-1150628", "318-1150630"];

// Filter records: remove any entry that mentions any of the 19 re-released batches
let removedCount = 0;
const filteredRecords = [];
const newCountyStats = {};

for (const item of originalData.records) {
  const text = (item.raw || '') + ' ' + (item.line || '');
  const isRereleased = rereleasedBatches.some(batch => text.includes(batch));
  
  if (isRereleased) {
    removedCount++;
  } else {
    filteredRecords.push(item);
    const county = item.county || '未知縣市';
    newCountyStats[county] = (newCountyStats[county] || 0) + 1;
  }
}

// Clone and update products_db for clear status distinction
const updatedProductsDb = JSON.parse(JSON.stringify(originalData.products_db));
if (updatedProductsDb.length > 0 && updatedProductsDb[0].brand === "中聯油脂") {
  updatedProductsDb[0].status_0721 = {
    "rereleased_batches": rereleasedBatches,
    "prohibited_batches": prohibitedBatches,
    "unshipped_batches": unshippedBatches
  };
  updatedProductsDb[0].note = "115/07/21 食藥署經專家評估核可 19 批重新上架，8 批維持強制下架。";
}

// Build the new 0721 JSON dataset
const newData = {
  version: "1150721",
  update_date: "民國 115 年 7 月 21 日 (食藥署 0721 重新上架19批核定修正版)",
  rereleased_batches_count: 19,
  rereleased_batches: rereleasedBatches,
  prohibited_batches: prohibitedBatches,
  unshipped_batches: unshippedBatches,
  total_records: filteredRecords.length,
  county_stats: newCountyStats,
  records: filteredRecords,
  products_db: updatedProductsDb
};

fs.writeFileSync('cleaned_data_0721.json', JSON.stringify(newData, null, 2), 'utf8');

console.log('✅ Created cleaned_data_0721.json successfully!');
console.log(`Original Records: ${originalData.records.length}`);
console.log(`Removed Rereleased Records: ${removedCount}`);
console.log(`New Total Records: ${filteredRecords.length}`);
