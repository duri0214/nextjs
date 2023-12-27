import { Box, Paper, Typography } from '@mui/material'
import { lusitana } from '@/app/_component/fonts'

export function Card({ title, value }: { title: string; value: number | string }) {
  return (
    <Paper elevation={3} style={{ flexGrow: 1, marginBottom: '20px' }}>
      <Box display='flex' flexDirection='column' height='100px'>
        <Typography variant='subtitle1'>{title}</Typography>
        <Typography variant='h5' className={`${lusitana.className}`}>
          {value}
        </Typography>
      </Box>
    </Paper>
  )
}
