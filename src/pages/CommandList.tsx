import { CommandSearch } from "@/components/CommandSearch";
import { CommandCategories } from "@/components/CommandCategories";
import { CommandOfTheDay } from "@/components/CommandOfTheDay";
import { TableOfContents } from "@/components/TableOfContents";
import { Header } from "@/components/Header";

const CommandList = () => {
  return (
    <div className="min-h-screen bg-terminal-black text-terminal-light">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-mono font-bold">
              Termux Command List – Comprehensive Guide for Beginners and Experts
            </h1>
            <p className="text-lg text-terminal-light/80">
              Explore, Learn, and Master the Most Useful Termux Commands to Unlock Endless Possibilities
            </p>
          </section>

          <CommandSearch />
          <CommandOfTheDay />
          <TableOfContents />
          <CommandCategories />
        </div>
      </main>
    </div>
  );
};

export default CommandList;