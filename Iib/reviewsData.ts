// lib/reviewsData.ts (or add to your main data file)

export interface Review {
  id: string; // Unique identifier (can be simple like 'peter-1')
  name: string;
  rating: number; // Use a number (e.g., 5, 4)
  comment: string;
  date?: string; // Optional date
}

export const reviewsData: Review[] = [
  { id: 'peter-1', name: "Peter", rating: 5, comment: "Aziz service was fantastic I would definitely recommend him for any mechanical issues", date: "" },
  { id: 'kushal-1', name: "Kushal Mongar", rating: 5, comment: "Fantastic service today! Highly recommend RB automotive, fast diagnosis, and repair on my car, very friendly. Thankyou again for coming out on such short notice, appreciate it! 🙏🙏🙏🙏🙏", date: "" },
  { id: 'sam-1', name: "Sam Platt", rating: 5, comment: "Reliable and fast", date: "" },
  { id: 'kassiani-1', name: "Kassiani Karikis", rating: 5, comment: "Our car wouldn’t start my husband a mechanic himself was unable to diagnose the problem and that’s when we decided to find someone else to get second opinion. Aziz found the problem almost immediately, which was an electrical fault. He is very knowledgeable, honest and affordable!!! Couldn’t recommend Aziz enough!!!", date: "" },
  { id: 'doug-1', name: "Doug Purton", rating: 5, comment: "It all started with an overheating Suzuki swift! After about 4 days, and removing half of the engine, and the whole dashboard, to get to the problems, the job was done. As I was working away at the time, it was all communicated by text messages and phone calls. Az made it very clear, and easy for me to understand what was happening with my car. I had no worries about leaving the keys with him, as he seems to be very professional and completely trust", date: "" },
  { id: 'john-d-1', name: "John D.", rating: 5, comment: "Excellent service! The mechanic arrived on time, was very professional, and fixed the issue quickly. Highly recommend!", date: "" },
  { id: 'jane-s-1', name: "Jane S.", rating: 5, comment: "Great experience. Very professional and knowledgeable. Explained everything clearly. Will definitely use again.", date: "" },
  { id: 'mike-j-1', name: "Mike J.", rating: 5, comment: "Fast, reliable, and affordable. They fixed my car quickly and got me back on the road the same day.", date: "" },
  { id: 'sarah-w-1', name: "Sarah W.", rating: 5, comment: "The mechanic was very knowledgeable and friendly. Took the time to explain the problem and the repair needed.", date: "" },
  { id: 'david-b-1', name: "David B.", rating: 4, comment: "Good service and convenient. There was a slight delay due to traffic, but overall, I'm satisfied with the work.", date: "" },
  { id: 'jessica-d-1', name: "Jessica D.", rating: 5, comment: "I'm very happy with the service. Great communication throughout the process. I will recommend them to friends.", date: "" },
  // Add more reviews as needed
];

// URLs for review platforms
export const reviewLinks = {
  googleWrite: "https://g.page/r/CeEwLIohYEIsEAI/review", // Direct link to write review
  googleRead: "https://g.co/kgs/NK9dGZM", // Link to view reviews/profile
  facebook: "https://www.facebook.com/RBAUTOMOTIVEWILLETTON/reviews/", // Link to FB reviews tab (adjust if needed)
  yelp: "#", // Replace '#' with your actual Yelp profile URL if you have one
};