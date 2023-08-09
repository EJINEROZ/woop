import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}

      <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-semibold mb-4">Contact us!</h2>
      <form name="contact" >
          <input type="hidden" name="form-name" value="contact" />
          <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" class="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300" />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" class="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-300" />
      </div>
      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" rows="4" class="mt-1 p-2 border rounded-md w-full resize-none focus:ring focus:ring-blue-300"></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Submit</button>
    </form>
      </div>
    </body>
    </html>
  )
}
