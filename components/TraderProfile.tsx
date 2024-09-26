'use client'

import React from 'react'
import Image from 'next/image'
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
import { Award, BarChart2, DollarSign, TrendingUp, Users } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

export default function TraderProfile() {
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

  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="w-full max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden"
      >
        <CardHeader className="p-6 border-b">
          <div className="flex items-center justify-between w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LeoFi_4x4-qV8iHK5K8IxONkFo4Fe4Hwu9AwMHf0.jpg"
              alt="LeoFi Logo"
              width={100}
              height={100}
              className="h-12 w-auto"
            />
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" /> Follow
            </Button>
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
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="background">Background</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
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