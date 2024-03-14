import Form from "@/components/form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-800 gap-6">
      <div className="bg-white p-4 w-[600px] rounded-md">
        <h1 className="text-center text-4xl font-bold ">
          Tạo lời chúc <span className="text-orange-600">valentine</span> online
        </h1>
      </div>
      <Form />
    </main>
  );
}
