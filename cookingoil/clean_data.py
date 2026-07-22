import json
import re

def main():
    with open('下游業者資料.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    records = data.get('records', [])
    cleaned_records = []
    county_stats = {}

    for item in records:
        county = item.get('county', '')
        # Clean county string if it starts with date prefix
        cleaned_county = re.sub(r'^\d{4}[\.\/-]\d{2}[\.\/-]\d{2}', '', county).strip()
        
        raw_text = item.get('raw', '')
        seq = item.get('seq', 0)

        cleaned_item = {
            "county": cleaned_county,
            "seq": seq,
            "raw": raw_text,
            "line": item.get('line', '')
        }
        cleaned_records.append(cleaned_item)
        county_stats[cleaned_county] = county_stats.get(cleaned_county, 0) + 1

    # Standard product database
    products_db = [
        {
            "brand": "中聯油脂",
            "type": "上游原料製造商",
            "name": "一級黃豆油（原料大豆油）",
            "batches": [
                "315-1150404", "318-1150406", "313-1150408", 
                "314-1150410", "315-1150413", "315-1150510", "313-1150512"
            ],
            "description": "衛福部食藥署公告強制下架之中聯油脂特定批號黃豆油原料",
            "status": "強制下架"
        },
        {
            "brand": "福壽實業",
            "type": "品牌/製造商",
            "name": "大豆沙拉油 (3L / 18L)",
            "batches": ["BL200426D", "BS270426L", "C2140426O", "C1140426K"],
            "description": "含炸酥油(18L)、不飽和大豆沙拉油(2L)等系列產品",
            "status": "強制下架"
        },
        {
            "brand": "福壽實業",
            "type": "品牌/製造商",
            "name": "芝麻油 / 香油 / 辣椒油系列",
            "batches": ["BL200426D", "C1140426K", "BS270426L"],
            "description": "胡麻油(3L)、好味香油、健味香油、頂級香油(500g)、辣椒油(3L)",
            "status": "強制下架"
        },
        {
            "brand": "泰山企業",
            "type": "品牌/製造商",
            "name": "大豆沙拉油 & 蔬菜調合油系列",
            "batches": ["TS202604A", "TS202605B", "特定批號"],
            "description": "大豆沙拉油(0.6L/2.6L)、精選蔬菜油(3L)、歐式蔬菜調合油(0.5L)、花生風味調合油(2L)、好美調合油(2L)",
            "status": "強制下架"
        },
        {
            "brand": "南僑油脂",
            "type": "品牌/製造商",
            "name": "一級黃豆油",
            "batches": ["202605221313", "特定批號"],
            "description": "供應下游餐飲與食品加工廠之一級黃豆油",
            "status": "強制下架"
        },
        {
            "brand": "益康油脂",
            "type": "品牌/製造商",
            "name": "益康大豆沙拉油 / 烹調油",
            "batches": ["202704100004072027.04.10", "20270410"],
            "description": "大豆沙拉油(18L/18KG)、調合烹調油",
            "status": "強制下架"
        },
        {
            "brand": "金酥品牌",
            "type": "品牌/製造商",
            "name": "金酥耐炸油 (18L)",
            "batches": ["20270417", "20270522"],
            "description": "營業用耐炸植物油 (18L)",
            "status": "強制下架"
        },
        {
            "brand": "黃金優選",
            "type": "品牌/製造商",
            "name": "黃金優選大豆沙拉油 (3L / 18L)",
            "batches": ["HJ202604", "特定批號"],
            "description": "大豆沙拉油(3L/18L)",
            "status": "強制下架"
        }
    ]

    output_data = {
        "version": "1150716",
        "update_date": "民國 114 年 7 月 16 日 (食藥署官方公告)",
        "total_records": len(cleaned_records),
        "county_stats": county_stats,
        "records": cleaned_records,
        "products_db": products_db
    }

    with open('cleaned_data.json', 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print(f"Data cleaned successfully. Total records: {len(cleaned_records)}")
    print(f"Counties count: {len(county_stats)}")

if __name__ == '__main__':
    main()
