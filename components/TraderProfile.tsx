'use client'

declare global {
  interface Window {
    ethereum: {
      request: (args: { method: string }) => Promise<any>;
    };
  }
}

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ethers } from 'ethers'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Award, BarChart2, DollarSign, TrendingUp, Users, Wallet } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function TraderProfile() {
  const [account, setAccount] = useState<string | null>(null)
  const [balance, setBalance] = useState<string | null>(null)
  const [isFollowing, setIsFollowing] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  }

  const slideIn = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  const monthlyPerformance = [
    { month: 'January', value: 1.8 },
    { month: 'February', value: -0.5 },
    { month: 'March', value: 2.3 },
    { month: 'April', value: 1.2 },
    { month: 'May', value: -0.8 },
    { month: 'June', value: 1.5 },
  ]

  const strategyPerformance = [
    { date: '2023-01-01', strategy: 105, benchmark: 100 },
    { date: '2023-02-01', strategy: 108, benchmark: 102 },
    { date: '2023-03-01', strategy: 112, benchmark: 104 },
    { date: '2023-04-01', strategy: 110, benchmark: 103 },
    { date: '2023-05-01', strategy: 115, benchmark: 106 },
    { date: '2023-06-01', strategy: 120, benchmark: 108 },
    { date: '2023-07-01', strategy: 118, benchmark: 107 },
    { date: '2023-08-01', strategy: 125, benchmark: 110 },
    { date: '2023-09-01', strategy: 130, benchmark: 112 },
    { date: '2023-10-01', strategy: 128, benchmark: 111 },
    { date: '2023-11-01', strategy: 135, benchmark: 114 },
    { date: '2023-12-01', strategy: 140, benchmark: 116 },
  ]

  const dexAllocation = [
    { name: 'Uniswap', value: 35 },
    { name: 'SushiSwap', value: 25 },
    { name: 'Curve', value: 20 },
    { name: 'Balancer', value: 15 },
    { name: 'Others', value: 5 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const address = (await signer).address
        setAccount(address)
        const balance = await provider.getBalance(address)
        setBalance(ethers.formatEther(balance))
      } catch (error) {
        console.error('Failed to connect wallet:', error)
      }
    } else {
      console.log('Please install MetaMask!')
    }
  }

  const handleDeposit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const amount = form.amount.value
    // Implement deposit logic here
    console.log('Deposit:', amount)
  }

  const handleWithdraw = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const amount = form.amount.value
    // Implement withdraw logic here
    console.log('Withdraw:', amount)
  }

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
    // Implement follow logic here
    console.log(isFollowing ? 'Unfollowed' : 'Followed')
  }

  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden"
      >
        <CardHeader className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LeoFi_4x4-qV8iHK5K8IxONkFo4Fe4Hwu9AwMHf0.jpg"
              alt="LeoFi Logo"
              width={100}
              height={100}
              className="h-12 w-auto"
            />
            <div className="flex items-center space-x-2">
              <Button
                variant={isFollowing ? "secondary" : "default"}
                onClick={handleFollow}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
              {account ? (
                <div className="flex items-center space-x-2">
                  <Wallet className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-600">{`${account.slice(0, 6)}...${account.slice(-4)}`}</span>
                </div>
              ) : (
                <Button variant="outline" onClick={connectWallet}>
                  <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        <motion.div variants={slideIn} className="p-6 flex flex-col sm:flex-row items-center gap-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Alex Morgan" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-2xl font-bold">Alex Morgan</CardTitle>
            <CardDescription>Senior Fund Manager at LeoFi Investments</CardDescription>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
              <Badge variant="secondary">Forex</Badge>
              <Badge variant="secondary">Commodities</Badge>
              <Badge variant="secondary">Crypto</Badge>
            </div>
          </div>
        </motion.div>

        <CardContent>
          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="background">Background</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
              <TabsTrigger value="deposit-withdraw">Deposit/Withdraw</TabsTrigger>
            </TabsList>
            <TabsContent value="performance">
              <motion.div variants={fadeIn} className="grid gap-4 mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">AUM</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$1.2B</div>
                      <p className="text-xs text-muted-foreground">+20% from last year</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">YTD Return</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5.5%</div>
                      <p className="text-xs text-muted-foreground">+2.1% above benchmark</p>
                    </CardContent>
                  </Card>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {monthlyPerformance.map((month, index) => (
                        <motion.div
                          key={month.month}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex items-center">
                            <span className="flex-1">{month.month}</span>
                            <span className="mr-4 text-right">{month.value > 0 ? '+' : ''}{month.value.toFixed(1)}%</span>
                            <Progress value={(month.value + 3) * 10} className="w-1/3" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="background">
              <motion.div variants={fadeIn} className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Background</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>15+ years of experience in financial markets</li>
                      <li>MBA from Harvard Business School</li>
                      <li>CFA Charterholder</li>
                      <li>Previously managed $500M hedge fund at BlackRock</li>
                      <li>Specializes in global macro strategies and algorithmic trading</li>
                    </ul>
                  </CardContent>
                </Card>                
              </motion.div>
            </TabsContent>
            <TabsContent value="strategy">
              <motion.div variants={fadeIn} className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Alex employs a multi-strategy approach, combining fundamental analysis with quantitative models:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Global macro analysis for identifying market trends</li>
                      <li>Statistical arbitrage for exploiting price inefficiencies</li>
                      <li>Event-driven strategies for capitalizing on corporate actions</li>
                      <li>Advanced risk management using proprietary algorithms</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Strategy Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={strategyPerformance}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="strategy" stroke="#8884d8" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="benchmark" stroke="#82ca9d" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>DEX Protocol Funding Allocation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-[400px] flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={dexAllocation}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {dexAllocation.map((entry, index) =>
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            )}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="deposit-withdraw">
              <motion.div variants={fadeIn} className="mt-4 grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Deposit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleDeposit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="deposit-amount">Amount</Label>
                        <Input id="deposit-amount" name="amount" type="number" step="0.01" min="0" required />
                      </div>
                      <Button type="submit" disabled={!account}>Deposit</Button>
                    </form>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Withdraw</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleWithdraw} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="withdraw-amount">Amount</Label>
                        <Input id="withdraw-amount" name="amount" type="number" step="0.01" min="0" required />
                      </div>
                      <Button type="submit" disabled={!account}>Withdraw</Button>
                    </form>
                  </CardContent>
                </Card>
                {account && balance && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Wallet Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{parseFloat(balance).toFixed(4)} ETH</p>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            </TabsContent>
          </Tabs>
        </CardContent>

        <CardFooter className="flex justify-between p-6 border-t">
          <div className="flex items-center">
            <Award className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-sm text-muted-foreground">Top 1% performer in 2023</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <BarChart2 className="mr-2 h-4 w-4" /> View Full Analytics
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Full Analytics - Alex Morgan</DialogTitle>
                <DialogDescription>
                  Comprehensive performance metrics and analysis
                </DialogDescription>
              </DialogHeader>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="mt-4 space-y-4"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Metric</TableHead>
                          <TableHead>1 Year</TableHead>
                          <TableHead>3 Year</TableHead>
                          <TableHead>5 Year</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Total Return</TableCell>
                          <TableCell>11.2%</TableCell>
                          <TableCell>32.7%</TableCell>
                          <TableCell>58.9%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Alpha</TableCell>
                          <TableCell>2.8%</TableCell>
                          <TableCell>2.5%</TableCell>
                          <TableCell>2.3%</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sharpe Ratio</TableCell>
                          <TableCell>1.4</TableCell>
                          <TableCell>1.3</TableCell>
                          <TableCell>1.2</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Max Drawdown</TableCell>
                          <TableCell>-8.2%</TableCell>
                          <TableCell>-12.5%</TableCell>
                          <TableCell>-15.3%</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Asset Allocation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { name: 'Equities', value: 45 },
                        { name: 'Fixed Income', value: 30 },
                        { name: 'Commodities', value: 15 },
                        { name: 'Crypto', value: 10 },
                      ].map((asset, index) => (
                        <motion.div
                          key={asset.name}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex items-center">
                            <span className="flex-1">{asset.name}</span>
                            <span className="mr-4 text-right">{asset.value}%</span>
                            <Progress value={asset.value} className="w-1/3" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </motion.div>
    </div>
  )
}