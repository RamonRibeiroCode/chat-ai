"use client";

import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ScrollArea } from "./ui/scroll-area";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <main className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>M3 Chat</CardTitle>
          <CardDescription>
            Using Vercel SDK to create a chat bot
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <ScrollArea className="h-[600px] pr-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="flex gap-2 text-slate-600 text-small"
              >
                {message.role === "user" && (
                  <Avatar>
                    <AvatarFallback>RR</AvatarFallback>
                    <AvatarImage src="https://github.com/RamonRibeiroCode.png" />
                  </Avatar>
                )}

                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarFallback>HE</AvatarFallback>
                    <AvatarImage src="https://github.com/heraldo663.png" />
                  </Avatar>
                )}

                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    {message.role === "user" ? "Humano" : "Heraldo"}
                  </span>
                  {message.content}
                </p>
              </div>
            ))}
          </ScrollArea>
        </CardContent>

        <CardFooter>
          <form className="w-full flex space-x-2" onSubmit={handleSubmit}>
            <Input
              placeholder="How can I help you?"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </main>
  );
}
