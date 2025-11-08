"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Rocket,
  Star,
  Users,
  Activity,
  TrendingUp,
  Globe,
  Zap,
  Award,
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  const stats = [
    { icon: Rocket, label: "Missions", value: "127", color: "from-blue-400 to-blue-600" },
    { icon: Star, label: "Stars Discovered", value: "1.2K", color: "from-yellow-400 to-yellow-600" },
    { icon: Users, label: "Team Members", value: "48", color: "from-purple-400 to-purple-600" },
    { icon: Activity, label: "Active Probes", value: "23", color: "from-green-400 to-green-600" },
  ];

  const recentActivities = [
    { icon: Globe, title: "Mars Exploration", status: "In Progress", time: "2h ago" },
    { icon: Zap, title: "Solar Flare Analysis", status: "Completed", time: "5h ago" },
    { icon: Award, title: "Mission Achievement", status: "New", time: "1d ago" },
    { icon: TrendingUp, title: "Data Upload", status: "Processing", time: "3d ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background stars */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-black/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Space Dashboard
            </h1>
            <p className="text-gray-400 text-sm mt-1">Mission Control Center</p>
          </div>
          <Button
            onClick={() => router.push("/")}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Sign Out
          </Button>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/5 border-white/10 p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                  </div>
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 backdrop-blur-xl bg-white/5 border-white/10 p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Activity className="w-6 h-6 mr-2 text-purple-400" />
              Recent Activities
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{activity.title}</h4>
                        <p className="text-gray-400 text-sm">{activity.time}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        activity.status === "Completed"
                          ? "bg-green-500/20 text-green-300"
                          : activity.status === "In Progress"
                          ? "bg-blue-500/20 text-blue-300"
                          : activity.status === "New"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-purple-500/20 text-purple-300"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="backdrop-blur-xl bg-white/5 border-white/10 p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-400" />
              Quick Actions
            </h2>
            <div className="space-y-3">
              <Button className="w-full justify-start bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                <Rocket className="w-4 h-4 mr-2" />
                Launch Mission
              </Button>
              <Button className="w-full justify-start bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white">
                <Star className="w-4 h-4 mr-2" />
                View Galaxy Map
              </Button>
              <Button className="w-full justify-start bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white">
                <Activity className="w-4 h-4 mr-2" />
                System Status
              </Button>
              <Button className="w-full justify-start bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                <Users className="w-4 h-4 mr-2" />
                Team Chat
              </Button>
            </div>

            {/* Mission Progress */}
            <div className="mt-8">
              <h3 className="text-white font-semibold mb-4">Mission Progress</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Mars Colony</span>
                    <span className="text-white">85%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Moon Base</span>
                    <span className="text-white">62%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[62%] bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Asteroid Mining</span>
                    <span className="text-white">34%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[34%] bg-gradient-to-r from-pink-400 to-pink-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
