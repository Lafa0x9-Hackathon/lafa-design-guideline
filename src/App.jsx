import Badge from "./components/Badge/Badge"

function App() {

  return (
    <div>
      
      <main className="flex items-center justify-center h-screen">
      {/* <Tabs defaultValue="hello">
        <TabsList>
          <TabsTrigger>hello</TabsTrigger>
          <TabsTrigger>hello</TabsTrigger>
          <TabsTrigger>hello</TabsTrigger>
        </TabsList>
      </Tabs> */}
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge>Default</Badge>
    </main>
      
    </div>
  )
}

export default App
