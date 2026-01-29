export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500">
        <span>© {new Date().getFullYear()} APNIRC. All rights reserved.</span>

        <span className="mt-2 sm:mt-0">
          Powered by <strong>APNIRC Admin</strong>
        </span>
      </div>
    </footer>
  );
}
