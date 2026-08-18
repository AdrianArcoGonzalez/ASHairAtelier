const Footer = () => {

    return(
        <footer className="bg-[#1d1413] text-[#f6efe9] py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4 text-[#e8dacc]">© 2024 Hair Atelier. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="#" className="text-[#d9ba8b] hover:text-[#f0d9ae] transition">f</a>
            <a href="#" className="text-[#d9ba8b] hover:text-[#f0d9ae] transition">📱</a>
            <a href="#" className="text-[#d9ba8b] hover:text-[#f0d9ae] transition">💬</a>
          </div>
        </div>
      </footer>
    )
};

export default Footer;