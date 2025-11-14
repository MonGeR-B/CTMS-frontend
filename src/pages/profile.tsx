import React from 'react';
import AppShell from '../components/layout/AppShell';

export default function Profile() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <div className="bg-white rounded-2xl p-6 shadow-glass">
          <p>Profile management coming soon...</p>
        </div>
      </div>
    </AppShell>
  );
}