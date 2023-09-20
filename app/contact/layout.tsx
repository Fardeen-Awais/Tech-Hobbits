import Script from "next/script"
export default function ContactLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {children}
        <Script src="https://assets.calendly.com/assets/external/widget.js"></Script>
      </section>
    )
  }