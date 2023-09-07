import { Suspense } from "react"
import Background from "./GridLines"
import { createResource } from "./PromiseAPI"

const resource = createResource()
export default function CardContainer() {
  return (
    <section className="my-40">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10 items-center">
        <Suspense fallback={<div>loading...</div>}>
          <Card profile={resource} />
        </Suspense>
      </div>
    </section>
  )
}

const Card = ({ profile }: { profile: any }) => {

  return (
    <>
      <Background />
      <Suspense fallback={<CardSkeleton />}>
        <div className="w-56 h-60 bg-white/50 rounded-md">
          {profile}
        </div>
      </Suspense>
    </>
  )
}

const CardSkeleton = () => {
  return (
    <div className="w-56 h-60 bg-white/50 animate-pulse rounded-md p-4 flex flex-col justify-start items-start space-y-2">
      <div className="w-[97%] h-16 bg-white/30 rounded-md"></div>
      <div className="w-[97%] h-5 bg-white/30 rounded-md"></div>
      <div className="w-[97%] h-5 bg-white/30 rounded-md"></div>
      <div className="w-[97%] h-1 bg-white/30 rounded-md"></div>
      <div className="w-[97%] h-1 bg-white/30 rounded-md"></div>
      <div className="w-[97%] h-7 bg-white/30 rounded-md"></div>
    </div>
  )
}