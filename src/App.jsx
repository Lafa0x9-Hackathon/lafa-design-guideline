import { FaCircleInfo } from "react-icons/fa6";
import Button from "./components/Buttons";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./components/Tabs";

const App = () => {
  return (
    <main className="flex flex-col items-center gap-20 justify-center min-h-screen py-20">
      <div className="flex flex-col items-start w-[510px]">
        <h2 className="mb-3 font-bold text-2xl underline">Buttons</h2>
        <div>
          <div className="grid grid-cols-3 gap-8 mb-4">
            <Button variant="primary">Primary</Button>
            <Button variant="primary-outline">Outline</Button>
            <Button variant="primary-ghost">Ghost</Button>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-4">
            <Button variant="success">Success</Button>
            <Button variant="success-outline">Outline</Button>
            <Button variant="success-ghost">Ghost</Button>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-4">
            <Button variant="danger">Danger</Button>
            <Button variant="danger-outline">Outline</Button>
            <Button variant="danger-ghost">Ghost</Button>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-4">
            <Button variant="neutral">Neutral</Button>
            <Button variant="neutral-outline">Outline</Button>
            <Button variant="neutral-ghost">Ghost</Button>
          </div>

          <div className="flex items-start flex-col gap-4 mt-8">
            <h1 className="font-semibold">Button with icon</h1>
            <Button variant="primary" className="px-4">
              <FaCircleInfo className="text-inherit"/>
              Button text
            </Button>

            <Button variant="success" className="px-4">
              Button text
              <FaCircleInfo className="text-inherit"/>
            </Button>

            <Button variant="primary-outline" className="px-4">
              Button text
              <FaCircleInfo className="text-inherit"/>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <h2 className="mb-3 font-bold text-2xl underline">Tabs</h2>
        <Tabs defaultValue="grants" className="w-[510px]">
          <TabsList>
            <TabsTrigger value="grants">Grants</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="matchingPools">Matching Pools</TabsTrigger>
          </TabsList>

          <TabsContent value="grants">Grants</TabsContent>
          <TabsContent value="collections">Collections</TabsContent>
          <TabsContent value="matchingPools">Matching Pools</TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default App;
