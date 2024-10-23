

/**
 * @typedef {Object} Ticket
 * @property {string} id
 * @property {string} title
 * @property {string[]} tag
 * @property {string} userId
 * @property {string} status
 * @property {number} priority
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {boolean} available
 */

/**
 * @typedef {Object} Col
 * @property {Ticket[]} col
 */

/**
 * @typedef {Object} UserIdToData
 * @property {Record<string, User>} userData
 */
