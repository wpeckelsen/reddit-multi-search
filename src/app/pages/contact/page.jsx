import Card from '@/app/components/card/Card'
import React from 'react'

export default function page() {
  return (
    <Card
      size="narrow"
      title="Contact"
      subtitle="Made by: Wessel Peckelsen"
      content={
        <>
          <p>If you enjoyed this website, feel free to reach out to me: <a href="mailto:wpeckelsen@gmail,com">wpeckelsen@gmail,com</a></p>
          <p>(replace the comma in my email by a dot)</p>

        </>
      }
    />
  )
}
