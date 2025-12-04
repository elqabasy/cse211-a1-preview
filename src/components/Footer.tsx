export function Footer() {
  return (
    <footer className="bg-[#f5f5f5] border-t border-[#ddd] mt-12">
      <div className="max-w-[1100px] mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <a href="https://university.edu" className="text-[#333] no-underline hover:opacity-80" target="_blank" rel="noopener noreferrer">
            University Website
          </a>
          <a href="mailto:info@studentportal.edu" className="text-[#333] no-underline hover:opacity-80">
            Email
          </a>
          <a href="#" className="text-[#333] no-underline hover:opacity-80">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
