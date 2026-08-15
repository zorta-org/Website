This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



##Documentation: 

1. Dashboard Overview

The Zorta dashboard is divided into four main areas:

Sidebar — navigation, workspaces and upgrade section

Topbar — search, create button, notifications and user profile

Main Content — hero section, quick cards, recent activity, marketplace and statistics

Rightbar — wallet, level progress, streak, daily tasks and quick actions


The dashboard is responsive and adapts its layout for desktop, tablet and mobile screens.

The frontend currently uses Next.js, React, TypeScript/JSX, Tailwind CSS, Redux Toolkit and Iconify.


---

2. Frontend Work Completed

The dashboard UI has been built using reusable components.

Main

main.tsx

mainHero.jsx

quickCards.tsx

recentActivity.tsx

marketplace.tsx

statisitcs.tsx


Rightbar

Wallet.tsx

LevelProgress.tsx

Streak.tsx

DailyTasks.tsx

QuickActions.tsx


Sidebar

Navigation

Workspaces

Upgrade card


State Management

Redux slices have been created for the dashboard-related data:

coinSlice
progressSlice
streakSlice
dailyTasksSlice

At the moment, some of these contain temporary/mock data so the UI can be developed without waiting for the backend.


---

3. Backend Work — Can Be Developed Independently

The backend does not need the frontend to be completed.

The backend can start by implementing the data and business logic that the dashboard will eventually consume.

User / Wallet

Backend should provide:

Current coin balance

User information

Level

Total XP

XP required for the current/next level

Streak information


Example response:

{
  "coins": 12560,
  "level": 27,
  "totalXP": 8450,
  "nextLevelXP": 12000
}

The frontend will simply display these values.


---

4. Level & XP System

The level calculation should be handled by the backend.

The frontend should not decide:

How many XP = Level 28
How much XP a task gives
Whether a user deserves XP

Instead, the backend should:

1. Validate the action.


2. Award the appropriate XP.


3. Update total XP.


4. Calculate/update the user's level.


5. Return the updated progress.



This prevents users from manipulating XP through frontend code.


---

5. Streak System

The backend should handle streak logic.

It should track things such as:

Last activity date

Current streak

Whether today's activity has been completed

Previous streak history


The frontend only receives something like:

{
  "currentStreak": 14,
  "days": {
    "monday": true,
    "tuesday": true,
    "wednesday": true,
    "thursday": true,
    "friday": true,
    "saturday": false,
    "sunday": false
  }
}

The backend decides whether a day counts toward the streak.


---

6. Daily Tasks

Daily tasks should be controlled by the backend.

The backend should have a task definition system containing things such as:

Task ID
Task type
Reward
Completion type
Active/inactive
Reset period

For example:

LOGIN
VISIT_MARKETPLACE
COMPLETE_TASK
REFER_FRIEND

Some tasks can be:

One-time

Repeatable

Daily

Limited

Reset after a specific period


The backend should determine which tasks are available to the user.

Important

The frontend should never be trusted to award coins or XP.

For example, clicking:

Claim +50 Coins

should not directly add 50 coins in Redux.

Instead:

Frontend
   ↓
Request
   ↓
Backend validates task
   ↓
Backend awards reward
   ↓
Database updated
   ↓
Updated balance returned
   ↓
Redux updated
   ↓
UI updates

This protects the reward system from frontend manipulation.


---

7. Daily Task Reset

The backend should also control the reset time.

The frontend can display:

Resets in 10h 24m

but the actual reset should be determined by the backend.

The API can return something like:

{
  "resetAt": "2026-08-16T00:00:00Z"
}

The frontend can then calculate and display the countdown.


---

8. Recent Activity

The backend should eventually provide the user's recent activities.

The frontend currently displays only the latest few activities on the dashboard.

For example:

[
  {
    "id": 1,
    "type": "task_completed",
    "message": "Aryan completed a task and earned 150 Coins",
    "createdAt": "..."
  }
]

The /activity page can request the complete activity history.


---

9. Marketplace

Marketplace products should eventually come from the backend.

Each product can contain:

ID
Name
Description
Image
Price
Category
Seller
Rating

The dashboard only needs a small number of trending products.

The full marketplace page can request the complete product list.

Coin balance should come from the same wallet/user data rather than maintaining an independent frontend balance.


---

10. API + Redux Connection

Once the backend is ready, the temporary Redux data can be replaced with API data.

The basic flow will be:

Database
    ↓
Backend API
    ↓
Frontend API request
    ↓
Redux
    ↓
React Components
    ↓
Dashboard UI

For actions:

User action
    ↓
Frontend
    ↓
API request
    ↓
Backend validation
    ↓
Database update
    ↓
API response
    ↓
Redux update
    ↓
UI update

Redux is therefore mainly responsible for holding the current frontend state, not being the source of truth for coins, XP, streaks, or rewards.

The database/backend remains the source of truth.


---

11. Backend Can Start Now

The backend developer can work independently on:

Priority 1

Authentication/user system

Database structure

User wallet/coins

XP and levels


Priority 2

Daily task system

Task validation

Rewards

Daily reset logic

Streak system


Priority 3

Recent activity

Marketplace products

Trending products


Priority 4

API endpoints

Authentication/authorization

Connecting everything together


The frontend does not need to wait for these systems.

Temporary Redux data can continue powering the dashboard until the APIs are ready.


---

12. Final Integration

When both sides are ready, replace the temporary data with API calls while keeping the existing UI/components.

The goal is:

Frontend UI
     ↕
Redux
     ↕
API
     ↕
Backend
     ↕
Database

This keeps the frontend and backend loosely coupled and allows both sides to be developed simultaneously.

