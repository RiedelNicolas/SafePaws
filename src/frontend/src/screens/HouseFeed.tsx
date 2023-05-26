import { useEffect, useState } from "react";
import { HomesList } from "../components/ListOfHomes/HomesList";
import { Publications, getHomes } from "../components/ListOfHomes/getHomes";


export function HouseFeed() {

  const [publications, setPublications] = useState<Publications[]>()

  const fetchHomes = async () => {
    const publications = await getHomes();
    setPublications(publications);
  }

  useEffect(() => {
    fetchHomes();
  }, [])



  if( !publications ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }
  
  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Find the best suite for you</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <HomesList publications = {publications}/>
          </div>
        </main>
      </div>
    </>
  )
}