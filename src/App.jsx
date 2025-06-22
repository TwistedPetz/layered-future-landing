import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Download, Mail, Twitter, Youtube, FileText, CheckCircle, Users, Zap, Shield } from 'lucide-react'
import logo from './assets/The_Layered_future_logo.png'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would integrate with your form handler (n8n, API, etc.)
    console.log('Form submitted:', { email, message })
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
      setMessage('')
    }, 3000)
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src={logo} 
              alt="The Layered Future" 
              className="h-36 md:h-48 mx-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] bg-clip-text text-transparent">
            Built Different. Not Left Behind.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A modern guide for creatives navigating AI, automation, and the future of work.
          </p>
          
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-[#FF6B00] hover:bg-[#FF5500] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download the Free Starter Pack
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            No spam. Just smart creative tech.
          </p>
          
          {/* Placeholder for video */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="aspect-video bg-[#2A2A2A] rounded-lg flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-muted-foreground">Video placeholder - Ready for Loom embed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Brand Story Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About The Layered Future</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Born from a need to pivot after decades in creative construction work, injuries, and chronic illness. 
                The Layered Future represents a bridge for 'in-betweeners' — those who are talented but overwhelmed 
                by the speed of AI, automation, and blockchain.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                We believe in creativity, empowerment, and clarity over hype. Our mission is to help hands-on creators 
                and small businesses adapt to and thrive with emerging technologies.
              </p>
              
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="bg-[#FF6B00] text-white">
                  Division of CloosEffects LLC
                </Badge>
              </div>
            </div>
            
            <div className="bg-[#2A2A2A] p-8 rounded-lg border border-border">
              <blockquote className="text-2xl font-semibold text-[#FF6B00] mb-4">
                "Work with the wave, not against it."
              </blockquote>
              <p className="text-muted-foreground">
                Our philosophy for navigating the intersection of creativity and emerging tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What's Inside the Starter Pack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to start integrating AI and automation into your creative workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-card border-border hover:border-[#FF6B00] transition-colors duration-300">
              <CardHeader>
                <FileText className="h-8 w-8 text-[#FF6B00] mb-2" />
                <CardTitle className="text-lg">JSON Profile Builder</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Structured templates to organize your business, brand, and personal development goals.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-[#FF6B00] transition-colors duration-300">
              <CardHeader>
                <Zap className="h-8 w-8 text-[#FF6B00] mb-2" />
                <CardTitle className="text-lg">AI Prompts Library</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ready-to-use prompts for content creation, business planning, and creative projects.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-[#FF6B00] transition-colors duration-300">
              <CardHeader>
                <Users className="h-8 w-8 text-[#FF6B00] mb-2" />
                <CardTitle className="text-lg">Video Walkthrough</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Step-by-step guidance on implementing AI tools in your creative workflow.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-[#FF6B00] transition-colors duration-300">
              <CardHeader>
                <Shield className="h-8 w-8 text-[#FF6B00] mb-2" />
                <CardTitle className="text-lg">Future-Proof Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automation templates and systems designed to scale with emerging technologies.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-[#FF6B00] hover:bg-[#FF5500] text-white px-8 py-4 text-lg font-semibold rounded-lg"
              onClick={() => scrollToSection('contact')}
            >
              Grab Your Pack Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Creators Are Saying</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Placeholder testimonials */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-sm text-muted-foreground">Creative Professional</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Testimonial placeholder - Ready for real customer feedback and success stories."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Jane Smith</h4>
                    <p className="text-sm text-muted-foreground">Small Business Owner</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Another testimonial placeholder - Space for authentic customer experiences."
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Badge variant="secondary" className="bg-[#FF6B00] text-white text-lg px-4 py-2">
              Division of CloosEffects LLC
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact + Opt-In Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Starter Pack</h2>
            <p className="text-xl text-muted-foreground">
              Join creators who are building their future with AI and automation.
            </p>
          </div>
          
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your starter pack is on its way. Check your email in a few minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="bg-background border-border focus:border-[#FF6B00]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message (Optional)
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your creative goals or challenges..."
                      className="bg-background border-border focus:border-[#FF6B00] min-h-[100px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#FF6B00] hover:bg-[#FF5500] text-white font-semibold py-4 rounded-lg"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Me the Starter Pack
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Your info stays private. Always.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#2A2A2A] border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img 
                src={logo} 
                alt="The Layered Future" 
                className="h-12 mb-4"
              />
              <p className="text-muted-foreground">
                Exploring the intersection of creativity and emerging tech.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <a 
                  href="https://twitter.com/thelayeredfuture" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground hover:text-[#FF6B00] transition-colors"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  X (Twitter)
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-muted-foreground hover:text-[#FF6B00] transition-colors"
                >
                  <Youtube className="mr-2 h-4 w-4" />
                  YouTube
                </a>
                <a 
                  href="#" 
                  className="flex items-center text-muted-foreground hover:text-[#FF6B00] transition-colors"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Notion
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-[#FF6B00] transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-muted-foreground hover:text-[#FF6B00] transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              TheLayeredFuture.com is a division of CloosEffects LLC. © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

