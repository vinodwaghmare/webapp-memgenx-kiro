/**
 * Daily Usage Timeline Chart
 * Built with Kiro for Kiroween 2025 🎃
 */

'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { date: 'Mon', memories: 12, conversations: 8 },
  { date: 'Tue', memories: 19, conversations: 12 },
  { date: 'Wed', memories: 15, conversations: 10 },
  { date: 'Thu', memories: 25, conversations: 16 },
  { date: 'Fri', memories: 22, conversations: 14 },
  { date: 'Sat', memories: 18, conversations: 11 },
  { date: 'Sun', memories: 23, conversations: 15 },
]

export function DailyUsageChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#6366f1" opacity={0.2} />
        <XAxis 
          dataKey="date" 
          stroke="#e9d5ff"
          style={{ fontSize: '12px' }}
        />
        <YAxis 
          stroke="#e9d5ff"
          style={{ fontSize: '12px' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e1b4b', 
            border: '1px solid #6366f1',
            borderRadius: '8px',
            color: '#fff'
          }}
        />
        <Legend 
          wrapperStyle={{ color: '#fff' }}
          iconType="line"
        />
        <Line 
          type="monotone" 
          dataKey="memories" 
          stroke="#667eea" 
          strokeWidth={3}
          dot={{ fill: '#667eea', r: 4 }}
          activeDot={{ r: 6 }}
          name="Memories"
        />
        <Line 
          type="monotone" 
          dataKey="conversations" 
          stroke="#fb923c" 
          strokeWidth={3}
          dot={{ fill: '#fb923c', r: 4 }}
          activeDot={{ r: 6 }}
          name="Conversations"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
