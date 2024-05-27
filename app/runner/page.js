'use client';

import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Runner() {
    const newGames = useGetDataByCategory(endpoints.games, "runner");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsListSection id="runner" title="Ранеры" data={newGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }