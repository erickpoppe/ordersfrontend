'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function CartPage() {
    const router = useRouter()


    return (
        <div>
            <h1 className="mb-4 text-xl">Ordenes</h1>
            <div>
            <Link
                href={`/crearorden`}
                className="flex items-center"
            >
                <b>Crear Orden</b>

            </Link>
            </div>
            <div>
                <Link
                    href={`/emitirorden`}
                    className="flex items-center"
                >
                    <b>Emitir Orden</b>

                </Link>
            </div>
        </div>

    )
}