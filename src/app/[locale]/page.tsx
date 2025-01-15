import { useTranslations } from 'next-intl'
import Hero from './hero'
import Highlight from './highlight'
import Highlight2 from './highlight2'
import { KisahSukses } from './KisahSukses'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section>
        <Hero />
      </section>
      {/* <section>
        <Highlight />
      </section> */}
      <section>
        <Highlight2 />
      </section>
      <section>
        <KisahSukses />
      </section>
    </div>
  )
}
