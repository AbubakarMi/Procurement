'use client';

import { useState } from 'react';
import { Search, CheckCircle2, Clock, AlertCircle, X, MapPin, Tag, Calendar, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { trackComplaint } from './actions';

interface ComplaintDetails {
  trackingId: string;
  status: string;
  category: string;
  complaintLocation: string;
  createdAt: string;
  updatedAt: string;
}

export default function TrackComplaint() {
  const [trackingId, setTrackingId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [complaint, setComplaint] = useState<ComplaintDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showResultAlert, setShowResultAlert] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingId.trim()) {
      setError('Please enter a tracking ID');
      return;
    }

    setIsSearching(true);
    setError(null);
    setComplaint(null);

    try {
      const result = await trackComplaint(trackingId.trim());

      if (result.success && result.complaint) {
        setComplaint(result.complaint as ComplaintDetails);
        setError(null);
        setShowResultAlert(true);
      } else {
        setError(result.message || 'Complaint not found');
      }
    } catch (err) {
      setError('Failed to track complaint. Please try again.');
      console.error('Tracking error:', err);
    } finally {
      setIsSearching(false);
    }
  };

  const handleClearSearch = () => {
    setComplaint(null);
    setError(null);
    setTrackingId('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'text-green-700 bg-green-50';
      case 'in-progress':
        return 'text-blue-700 bg-blue-50';
      default:
        return 'text-yellow-700 bg-yellow-50';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-600';
      case 'in-progress':
        return 'bg-blue-600';
      default:
        return 'bg-yellow-600';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'Resolved';
      case 'in-progress':
        return 'In Progress';
      default:
        return 'Pending Review';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <article className="bg-white border border-border hover:border-primary/50 transition-all duration-500">
      {/* Top bar */}
      <div className="h-2 bg-primary"></div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 border border-primary/20">
            <Search className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground font-headline">
            Track Complaint
          </h3>
        </div>

        {!complaint ? (
          <>
            <p className="text-sm text-muted-foreground mb-4">
              Enter your tracking ID to check complaint status
            </p>

            {/* Search Form */}
            <form onSubmit={handleTrack} className="space-y-3">
              <Input
                type="text"
                placeholder="GOV-123456"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="h-12 text-base"
                disabled={isSearching}
              />
              <Button
                type="submit"
                className="w-full h-12"
                disabled={isSearching}
              >
                {isSearching ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Track Complaint
                  </>
                )}
              </Button>
            </form>

            {/* Error */}
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-sm">{error}</AlertDescription>
              </Alert>
            )}

            {/* Help */}
            <div className="mt-4 p-3 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground">
                Check your email for the tracking ID sent after submission
              </p>
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {/* New Search Button */}
            <div className="flex justify-end">
              <Button
                onClick={handleClearSearch}
                variant="outline"
                size="sm"
              >
                <RefreshCw className="h-3 w-3 mr-1" />
                New Search
              </Button>
            </div>

            {/* Compact Status Summary */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-primary font-bold uppercase tracking-wider">
                  Complaint Found
                </p>
                <div className={`px-3 py-1 rounded-full ${getStatusBadgeColor(complaint.status)} text-white`}>
                  <span className="text-xs font-bold">
                    {getStatusLabel(complaint.status)}
                  </span>
                </div>
              </div>
              <p className="text-lg font-bold text-primary font-mono">
                {complaint.trackingId}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Click "View Details" to see full information
              </p>
              <Button
                onClick={() => setShowResultAlert(true)}
                className="w-full mt-3 h-10"
              >
                <Search className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* World Class Result Alert Dialog */}
      <AlertDialog open={showResultAlert} onOpenChange={setShowResultAlert}>
        <AlertDialogContent className="max-w-md p-0 overflow-hidden border-0 shadow-2xl">
          {/* Header with status-based gradient */}
          {complaint && (
            <>
              <div className={`p-5 text-white text-center ${
                complaint.status === 'resolved'
                  ? 'bg-gradient-to-br from-green-500 to-green-600'
                  : complaint.status === 'in-progress'
                  ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                  : 'bg-gradient-to-br from-yellow-500 to-yellow-600'
              }`}>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border-3 border-white/30 shadow-lg">
                  {complaint.status === 'resolved' ? (
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  ) : complaint.status === 'in-progress' ? (
                    <Clock className="w-7 h-7 text-white" />
                  ) : (
                    <AlertCircle className="w-7 h-7 text-white" />
                  )}
                </div>
                <AlertDialogTitle className="text-xl font-bold text-white mb-1">
                  {getStatusLabel(complaint.status)}
                </AlertDialogTitle>
                <p className="text-white/90 text-xs">
                  Complaint Status Report
                </p>
              </div>

              <AlertDialogDescription asChild>
                <div className="p-5 space-y-3">
                  {/* Tracking ID Box */}
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 rounded-lg p-3 text-center">
                    <p className="text-[10px] text-primary uppercase tracking-[0.15em] font-bold mb-1">
                      Tracking ID
                    </p>
                    <p className="text-lg font-black text-primary font-mono tracking-wider">
                      {complaint.trackingId}
                    </p>
                  </div>

                  {/* Compact Details Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Category */}
                    <div className="bg-muted/50 rounded-lg p-2.5 border border-border/50">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Tag className="h-3 w-3 text-primary" />
                        <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">Category</p>
                      </div>
                      <p className="text-xs font-semibold text-foreground capitalize truncate">{complaint.category.replace('-', ' ')}</p>
                    </div>

                    {/* Location */}
                    <div className="bg-muted/50 rounded-lg p-2.5 border border-border/50">
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin className="h-3 w-3 text-primary" />
                        <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">Location</p>
                      </div>
                      <p className="text-xs font-semibold text-foreground truncate">{complaint.complaintLocation}</p>
                    </div>

                    {/* Submitted */}
                    <div className="bg-muted/50 rounded-lg p-2.5 border border-border/50">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Calendar className="h-3 w-3 text-primary" />
                        <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">Submitted</p>
                      </div>
                      <p className="text-xs font-semibold text-foreground">{formatDate(complaint.createdAt)}</p>
                    </div>

                    {/* Updated */}
                    <div className="bg-muted/50 rounded-lg p-2.5 border border-border/50">
                      <div className="flex items-center gap-1.5 mb-1">
                        <RefreshCw className="h-3 w-3 text-primary" />
                        <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">Updated</p>
                      </div>
                      <p className="text-xs font-semibold text-foreground">{formatDate(complaint.updatedAt)}</p>
                    </div>
                  </div>

                  {/* Compact Timeline */}
                  <div className="bg-muted/30 rounded-lg p-3 border border-border/50">
                    <p className="text-[9px] font-bold text-primary uppercase tracking-wider mb-2">Progress</p>
                    <div className="flex items-center justify-between">
                      {/* Step 1 */}
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                        <p className="text-[8px] text-muted-foreground mt-1">Submitted</p>
                      </div>

                      {/* Connector */}
                      <div className={`flex-1 h-0.5 mx-1 ${
                        complaint.status === 'in-progress' || complaint.status === 'resolved'
                          ? 'bg-blue-600'
                          : 'bg-gray-300'
                      }`}></div>

                      {/* Step 2 */}
                      <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          complaint.status === 'in-progress' || complaint.status === 'resolved'
                            ? 'bg-blue-600'
                            : 'bg-gray-300'
                        }`}>
                          <Clock className="h-3 w-3 text-white" />
                        </div>
                        <p className="text-[8px] text-muted-foreground mt-1">Review</p>
                      </div>

                      {/* Connector */}
                      <div className={`flex-1 h-0.5 mx-1 ${
                        complaint.status === 'resolved'
                          ? 'bg-green-600'
                          : 'bg-gray-300'
                      }`}></div>

                      {/* Step 3 */}
                      <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          complaint.status === 'resolved'
                            ? 'bg-green-600'
                            : 'bg-gray-300'
                        }`}>
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        </div>
                        <p className="text-[8px] text-muted-foreground mt-1">Resolved</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-2.5 text-center">
                    <p className="text-[9px] text-muted-foreground">
                      Need help? <a href="mailto:info@procurement.kn.gov.ng" className="text-primary font-semibold">info@procurement.kn.gov.ng</a> | <span className="font-semibold">08065455715</span>
                    </p>
                  </div>
                </div>
              </AlertDialogDescription>

              <AlertDialogFooter className="p-5 pt-0">
                <AlertDialogAction
                  onClick={() => setShowResultAlert(false)}
                  className="w-full h-10 bg-primary hover:bg-primary/90 text-sm font-semibold shadow-lg"
                >
                  Close
                </AlertDialogAction>
              </AlertDialogFooter>
            </>
          )}
        </AlertDialogContent>
      </AlertDialog>
    </article>
  );
}
