import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/employees', () => {
    return HttpResponse.json([
      { id: '1', name: 'John Doe', email: 'john@company.com', role: 'Engineer', status: 'active' },
      { id: '2', name: 'Jane Smith', email: 'jane@company.com', role: 'Marketing Manager', status: 'active' }
    ])
  }),

  http.get('/api/expenses', () => {
    return HttpResponse.json([
      { id: '1', title: 'Hotel booking', date: '2024-01-15', amount: 250.00, status: 'pending' },
      { id: '2', title: 'Flight meal', date: '2024-01-14', amount: 85.50, status: 'approved' }
    ])
  }),

  http.get('/api/approvals', () => {
    return HttpResponse.json([
      { id: '1', type: 'expense', amount: 250.00, requester: 'John Doe', status: 'pending' }
    ])
  }),

  http.get('/api/dashboard/stats', () => {
    return HttpResponse.json({
      activeTrips: 3,
      pending: 2,
      totalExpenses: 192000,
      budgetUsed: 68
    })
  })
]