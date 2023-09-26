/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true, //para que funcionen los server action
	},
	images: {
		unoptimized: true, //la deshabilito ya que vercel cobra por la optimizacion de imagenes, no es un hosting gratuito, pero si un dia por casualidad se pasa a uno de pago ess mejor estar prevenidos.
	}
}

module.exports = nextConfig
