# Big Lotto - ระบบจัดการหวยครบวงจร

ระบบจัดการหวยที่ครบครัน รองรับหลายประเภทหวย พร้อมระบบเครดิตและรายงาน

## ✨ Features

- **3 ระดับผู้ใช้:** SuperAdmin, Dealer, User
- **5 ประเภทหวย:** ไทย, ลาว, ฮานอย, หุ้น, อื่นๆ
- **ระบบเครดิต:** เติม/หัก/ติดตามอัตโนมัติ
- **ระบบส่งต่อยอด:** เชื่อมต่อเจ้ามือหลายระดับ
- **ตรวจสลิปอัตโนมัติ:** เชื่อมต่อ SlipOK API
- **Responsive Design:** รองรับ Desktop, Tablet, Mobile

## 🚀 Tech Stack

- **Frontend:** React 19 + Vite
- **Styling:** Tailwind CSS
- **Backend:** Supabase (PostgreSQL + Auth + Storage)
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/jimmycharn/Biglotto.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## ⚙️ Environment Variables

สร้างไฟล์ `.env` และกำหนดค่าต่อไปนี้:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SLIPOK_URL=https://api.slipok.com/api/line/apikey/xxxxx
VITE_SLIPOK_API_KEY=your_slipok_api_key
```

## 🗄️ Database Setup

1. สร้าง Supabase project ที่ [supabase.com](https://supabase.com)
2. รัน SQL migration จากไฟล์ `supabase/migrations/001_initial_schema.sql`
3. เปิดใช้งาน Row Level Security (RLS)

## 📱 Pages

| หน้า | Path | คำอธิบาย |
|------|------|----------|
| Home | `/` | หน้าแรก |
| Login | `/login` | เข้าสู่ระบบ |
| Register | `/register` | สมัครสมาชิก |
| Setup | `/setup` | ตั้งค่าครั้งแรก (SuperAdmin) |
| Dashboard | `/dashboard` | แดชบอร์ดผู้ใช้ |
| Dealer | `/dealer` | แดชบอร์ดเจ้ามือ |
| SuperAdmin | `/superadmin` | แดชบอร์ดผู้ดูแลระบบ |
| Profile | `/profile` | ตั้งค่าโปรไฟล์ |
| Invite | `/invite` | รับคำเชิญจาก Dealer |

## 🔐 Roles

- **SuperAdmin:** จัดการระบบทั้งหมด, Dealers, แพ็คเกจ
- **Dealer:** สร้างงวดหวย, จัดการสมาชิก, รับยอดแทง
- **User:** แทงหวย, ดูผลรางวัล

## 📄 License

MIT License

---

*พัฒนาโดย Big Lotto Team © 2026*
