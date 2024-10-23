
// Importing necessary interfaces
import { Ticket, User } from "../interfaces"; // Ensure this is valid in your project

// Function to group tickets by status
export const groupTicketsByStatus = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        if (!result[ticket.status]) {
            result[ticket.status] = [];
        }
        result[ticket.status].push(ticket);
        return result;
    }, { "Backlog": [], "Todo": [], "In progress": [], "Done": [], "Canceled": [] });

    return groups;
};

// Function to group tickets by priority
export const groupTicketsByPriority = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        const priority = getPriorityLabel(ticket.priority);
        if (!result[priority]) {
            result[priority] = [];
        }
        result[priority].push(ticket);
        return result;
    }, { "No priority": [], "Urgent": [], "High": [], "Medium": [], "Low": [] }); // Ensure this order is maintained

    return groups;
};

// Function to group tickets by user ID
export const groupTicketsByUserId = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        if (!result[ticket.userId]) {
            result[ticket.userId] = [];
        }
        result[ticket.userId].push(ticket);
        return result;
    }, {});

    return groups;
};

// Function to map users by user ID
export const mapUsersByUserId = (users) => {
    let group = users.reduce((accumulator, user) => {
        accumulator[user.id] = user;
        return accumulator;
    }, {});

    return group;
};

// Function to get priority label
const getPriorityLabel = (priority) => {
    switch (priority) {
        case 0: return "No priority";
        case 4: return "Urgent";  // Updated to match desired order
        case 3: return "High";    // Updated to match desired order
        case 2: return "Medium";  // Updated to match desired order
        case 1: return "Low";     // Updated to match desired order
        default: return "NA";
    }
};

// Function to order tickets by priority
const orderByPriority = (tickets) => tickets.sort((a, b) => a.priority > b.priority ? -1 : 1);

// Function to order tickets by title
const orderByTitle = (tickets) => tickets.sort((a, b) => a.title < b.title ? -1 : 1);

// Function to load the grid
export const loadGrid = (tickets, grouping, ordering) => {
    let orderedTickets;
    if (ordering === "priority")
        orderedTickets = orderByPriority(tickets);
    else
        orderedTickets = orderByTitle(tickets);

    switch (grouping) {
        case "status": return groupTicketsByStatus(orderedTickets);
        case "priority": return groupTicketsByPriority(orderedTickets);
        case "user": return groupTicketsByUserId(orderedTickets);
        default: return groupTicketsByUserId(orderedTickets);
    }
};


