'use client';

import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Shooter() {
    const newGames = useGetDataByCategory(endpoints.games, "shooter");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsListSection id="shooter" title="Шутеры" data={newGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }