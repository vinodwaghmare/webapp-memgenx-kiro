/**
 * Platform Usage Pie Chart
 * Built with Kiro for Kiroween 2025 🎃
 */

'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const data = [
  { name: 'ChatGPT', value: 520, color: '#10a37f' },
  { name: 'Claude', value: 380, color: '#d97706' },
  { name: 'Gemini', value: 240, color: '#4285f4' },
  { name: 'Grok', value: 94, color: '#000000' },
]

export function PlatformPieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }: { name: string; percent: number }) => 
            `${name} ${(percent * 100).toFixed(0)}%`
          }
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
