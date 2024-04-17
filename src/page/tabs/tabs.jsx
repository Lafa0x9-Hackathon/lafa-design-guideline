import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
} from "../../components/Tabs/index.js";

const Tab = () => {
  return (
    <main className="flex items-center justify-center h-screen">
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
    </main>
  );
};

export default Tab;
