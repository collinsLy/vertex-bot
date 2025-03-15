
import { PurchasedBot, SupportTicket } from "@/types/auth";

export const mockPurchasedBots: PurchasedBot[] = [
  {
    id: "bot-1",
    name: "Forex Fury",
    description: "Popular automated trading bot with a claimed 63% success rate. Specializes in short-term trades.",
    price: 2000,
    purchasedAt: "2023-11-15T12:30:00Z",
    downloadUrl: "#",
    imageUrl: "https://placehold.co/200x200/F2FF44/333333?text=Forex+Fury",
  },
  {
    id: "bot-2",
    name: "1000pip Climber System",
    description: "Easy-to-use, fully automated forex trading bot designed to provide high-performance signals.",
    price: 3539,
    purchasedAt: "2023-12-05T14:45:00Z",
    downloadUrl: "#",
    imageUrl: "https://placehold.co/200x200/F2FF44/333333?text=1000pip",
  },
  {
    id: "bot-3",
    name: "Forex Steam 10",
    description: "Well-established trading bot with over a decade of use and a strong user base.",
    price: 5246,
    purchasedAt: "2024-01-20T09:15:00Z",
    downloadUrl: "#",
    imageUrl: "https://placehold.co/200x200/F2FF44/333333?text=Steam+10",
  },
];

export const mockSupportTickets: SupportTicket[] = [
  {
    id: "ticket-1",
    subject: "Installation help for Forex Fury",
    status: "open",
    createdAt: "2024-02-10T11:20:00Z",
    lastUpdated: "2024-02-10T16:45:00Z",
  },
  {
    id: "ticket-2",
    subject: "API connection issue with MetaTrader",
    status: "pending",
    createdAt: "2024-01-25T13:10:00Z",
    lastUpdated: "2024-01-27T09:30:00Z",
  },
  {
    id: "ticket-3",
    subject: "Request for refund",
    status: "closed",
    createdAt: "2023-12-15T10:00:00Z",
    lastUpdated: "2023-12-18T14:20:00Z",
  },
];

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
