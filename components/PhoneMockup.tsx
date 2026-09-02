"use client";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[270px] animate-float sm:w-[300px]">
      <div className="absolute -inset-8 rounded-[3rem] bg-brand-200/40 blur-3xl" />
      <div className="relative rounded-[2.35rem] bg-zinc-950 p-[10px] shadow-phone">
        <div className="relative overflow-hidden rounded-[1.9rem] bg-[#f6f8f7]">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-zinc-950" />
          <div className="flex items-center justify-between px-5 pb-3 pt-9">
            <div>
              <p className="text-[11px] text-zinc-500">اليوم</p>
              <p className="text-sm font-bold text-zinc-900">متجر النور</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
              د
            </div>
          </div>
          <div className="mx-4 rounded-2xl bg-gradient-to-br from-brand-700 to-brand-500 p-4 text-white shadow-soft">
            <p className="text-[11px] text-white/80">مبيعات اليوم</p>
            <p className="mt-1 text-2xl font-extrabold tracking-tight">12 480</p>
            <p className="mt-2 text-[11px] text-brand-100">+18% مقارنة بالأمس</p>
          </div>
          <div className="mt-4 space-y-2 px-4 pb-20">
            {[
              ["سكر 1كغ", "24", "120"],
              ["زيت نباتي", "11", "450"],
              ["حليب", "32", "80"],
            ].map(([name, qty, price]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div>
                  <p className="text-[13px] font-semibold text-zinc-800">{name}</p>
                  <p className="text-[11px] text-zinc-500">المخزون: {qty}</p>
                </div>
                <p className="text-[13px] font-bold text-brand-700">{price}</p>
              </div>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-around border-t border-zinc-100 bg-white/95 px-2 py-3 text-[10px] font-medium text-zinc-400 backdrop-blur">
            <span className="text-brand-700">المبيعات</span>
            <span>المخزون</span>
            <span>التقارير</span>
            <span>المزيد</span>
          </div>
        </div>
      </div>
    </div>
  );
}
