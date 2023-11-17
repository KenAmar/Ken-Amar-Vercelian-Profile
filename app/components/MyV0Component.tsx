/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dn3jZyBude8
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section
      key="1"
      className="relative w-64 h-64 mx-auto bg-gradient-to-r from-green-500 to-blue-500 p-6 rounded-lg shadow-lg transform rotate-45"
    >
      <div className="absolute inset-0 transform -rotate-45">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-black text-4xl font-bold mb-4">Guestbook</h2>
          <form className="flex flex-col space-y-2">
            <Input className="w-full rounded-md bg-white text-black px-3 py-2" placeholder="Name" type="text" />
            <Input className="w-full rounded-md bg-white text-black px-3 py-2" placeholder="Email" type="email" />
            <textarea className="w-full h-20 rounded-md bg-black text-white px-3 py-2" placeholder="Message" />
            <Button
              className="w-full py-2 text-white bg-green-500 hover:bg-green-600 rounded-md transition duration-200 ease-in-out animate-pulse"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
