CREATE TABLE `todos` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`completed` integer DEFAULT false,
	`dueDate` integer,
	`createdAt` integer NOT NULL,
	`updatedAt` integer
);
