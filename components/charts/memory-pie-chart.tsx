/**
 * Memory Distribution Pie Chart
 * Built with Kiro for Kiroween 2025 🎃
 */

'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const data = [
  { name: 'Technical', value: 450, color: '#667eea' },
  { name: 'Creative', value: 320, color: '#764ba2' },
  { name: 'Research', value: 280, color: '#fb923c' },
  { name: 'General', value: 184, color: '#f97316' },
]

export function MemoryPieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
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
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
  )
}
