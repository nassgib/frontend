'use client';

import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Pixel() {
    const newGames = useGetDataByCategory(endpoints.games, "pixel");
    return (
      <main className="main-inner">
        {newGames ? (
          <CardsListSection id="pixel" title="Пиксельные" data={newGames} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }