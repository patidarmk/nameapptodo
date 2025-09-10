import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container max-w-4xl py-12">
      <Card className="bg-card/80 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            About TodoMaster
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-lg text-muted-foreground">
          <p>
            Welcome to TodoMaster, a premium web application designed to help you organize your life with elegance and efficiency. Built with modern technology, TodoMaster provides a seamless and visually stunning experience for managing your tasks.
          </p>
          <p>
            Our philosophy is that productivity tools should be both powerful and beautiful. That's why we've focused on a clean, intuitive interface with smooth animations and thoughtful design details. Whether you're managing complex work projects, planning your studies, or just keeping track of your shopping list, TodoMaster is here to help you stay on top of it all.
          </p>
          <p>
            This application was expertly crafted by Applaa, your AI editor for creating and modifying premium web applications.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;