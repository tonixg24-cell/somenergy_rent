'use client'
import { useState, useRef, useEffect } from 'react'
import { FaWhatsapp, FaEnvelope, FaHeadset } from 'react-icons/fa'
import { MdContactPhone } from 'react-icons/md'

export default function ContactFloatingButton() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button
          aria-label="Opciones de contacto"
          className="bg-[#1A1A1A] text-white rounded-full p-4 shadow-lg hover:bg-[#C80E09] transition flex items-center justify-center"
          onClick={() => setOpen(true)}
        >
          <MdContactPhone size={28} />
        </button>
      )}

      {/* Modal flotante encima del botón */}
      {open && (
        <div
          ref={modalRef}
          className="absolute bottom-0 right-0 w-72 bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-4 animate-fade-in"
          style={{ minWidth: 240 }}
        >
          <span className="font-bold text-xl text-[#222] mb-2 text-center">¿Te ayudamos?</span>
          <a
            href="https://wa.me/34680575757"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-3 rounded-full bg-[#25D366] text-white font-semibold text-lg shadow hover:brightness-95 transition"
          >
            <FaWhatsapp size={26} /> Whatsapp
          </a>
          <a
            href="mailto:info@somenergyrent.com"
            className="flex items-center justify-center gap-3 w-full py-3 rounded-full bg-black text-white font-semibold text-lg shadow hover:bg-[#222] transition"
          >
            <FaEnvelope size={22} /> Escríbenos
          </a>
          <a
            href="tel:+34607057187"
            className="flex items-center justify-center gap-3 w-full py-3 rounded-full bg-black text-white font-semibold text-lg shadow hover:bg-[#222] transition"
          >
            <FaHeadset size={22} /> Llámanos
          </a>
        </div>
      )}

      {/* Simple animación de fade-in */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  )
}