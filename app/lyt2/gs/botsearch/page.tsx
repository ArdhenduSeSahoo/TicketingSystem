import { BotSearchStoreProvider } from "@/app/component/StoreProviderBootSearch";
import { BotSearchMainComponent } from "./BotSearchMainComponent";

export default function Page() {
  return (
    <div>
      <BotSearchStoreProvider>
        <BotSearchMainComponent />
      </BotSearchStoreProvider>
    </div>
  );
}
