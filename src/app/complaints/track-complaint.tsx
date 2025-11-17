'use client';

import { useState } from 'react';
import { Search, CheckCircle2, Clock, AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
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
                <X className="h-3 w-3 mr-1" />
                New Search
              </Button>
            </div>

            {/* Status Card */}
            <div className="border-2 border-primary/20 rounded-lg overflow-hidden">
              {/* Status Header */}
              <div className={`p-4 ${getStatusColor(complaint.status)}`}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider mb-1 opacity-70">
                      Status
                    </p>
                    <p className="text-2xl font-bold">
                      {getStatusLabel(complaint.status)}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full ${getStatusBadgeColor(complaint.status)} text-white`}>
                    <span className="text-xs font-bold uppercase">
                      {getStatusLabel(complaint.status)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="p-4 space-y-4">
                {/* Tracking ID */}
                <div className="bg-primary/5 border border-primary/20 p-3 rounded">
                  <p className="text-xs text-muted-foreground uppercase mb-2">
                    Tracking ID
                  </p>
                  <p className="text-lg md:text-xl font-bold text-primary font-mono break-all">
                    {complaint.trackingId}
                  </p>
                </div>

                {/* Category */}
                <div className="border-b pb-3">
                  <p className="text-xs text-muted-foreground uppercase mb-1">
                    Category
                  </p>
                  <p className="text-base font-semibold capitalize">
                    {complaint.category.replace('-', ' ')}
                  </p>
                </div>

                {/* Location */}
                <div className="border-b pb-3">
                  <p className="text-xs text-muted-foreground uppercase mb-1">
                    Location
                  </p>
                  <p className="text-base font-semibold">
                    {complaint.complaintLocation}
                  </p>
                </div>

                {/* Dates Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Submitted */}
                  <div className="bg-muted/30 p-3 rounded">
                    <p className="text-xs text-muted-foreground uppercase mb-1">
                      Submitted
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      {formatDate(complaint.createdAt)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatTime(complaint.createdAt)}
                    </p>
                  </div>

                  {/* Last Updated */}
                  <div className="bg-muted/30 p-3 rounded">
                    <p className="text-xs text-muted-foreground uppercase mb-1">
                      Updated
                    </p>
                    <p className="text-sm font-bold text-foreground">
                      {formatDate(complaint.updatedAt)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatTime(complaint.updatedAt)}
                    </p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="border-t pt-4">
                  <p className="text-xs font-bold uppercase mb-3">
                    Progress Timeline
                  </p>
                  <div className="space-y-2">
                    {/* Step 1: Submitted */}
                    <div className="flex gap-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-600 flex items-center justify-center">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">Submitted</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(complaint.createdAt)}
                        </p>
                      </div>
                    </div>

                    {/* Step 2: In Review */}
                    <div className="flex gap-2">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        complaint.status === 'in-progress' || complaint.status === 'resolved'
                          ? 'bg-blue-600'
                          : 'bg-gray-300'
                      }`}>
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-semibold ${
                          complaint.status === 'in-progress' || complaint.status === 'resolved'
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }`}>
                          Under Review
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {complaint.status === 'in-progress' || complaint.status === 'resolved'
                            ? formatDate(complaint.updatedAt)
                            : 'Pending'
                          }
                        </p>
                      </div>
                    </div>

                    {/* Step 3: Resolved */}
                    <div className="flex gap-2">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        complaint.status === 'resolved'
                          ? 'bg-green-600'
                          : 'bg-gray-300'
                      }`}>
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-semibold ${
                          complaint.status === 'resolved'
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }`}>
                          Resolved
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {complaint.status === 'resolved'
                            ? formatDate(complaint.updatedAt)
                            : 'Not yet'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-primary/5 border border-primary/20 p-3 rounded">
                  <p className="text-xs font-semibold mb-1">Need Help?</p>
                  <p className="text-xs text-muted-foreground">
                    Email:{' '}
                    <a
                      href="mailto:info@procurement.kn.gov.ng"
                      className="text-primary hover:underline"
                    >
                      info@procurement.kn.gov.ng
                    </a>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Phone: <span className="font-semibold">08065455715</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
