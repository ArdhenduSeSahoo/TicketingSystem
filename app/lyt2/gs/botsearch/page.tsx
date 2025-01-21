import { BotSearchStoreProvider } from "@/app/component/StoreProviderBootSearch";
import { BotSearchMainComponent } from "./MainComponent";

export default function Page() {
    return (
      <>
        <BotSearchStoreProvider>
          <BotSearchMainComponent />
        </BotSearchStoreProvider>
      </>
    );
  }
  