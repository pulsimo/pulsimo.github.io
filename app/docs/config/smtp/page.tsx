import { Metadata } from 'next'
import { Mail, CheckCircle2, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SMTP & Email - Pulsimo Documentation',
  description: 'Configure email notifications with SMTP providers',
}

export default function SmtpPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-3">
      <h1>SMTP & Email Configuration</h1>
      <div className="not-prose mb-6">
        <p className="text-base text-slate-600 dark:text-slate-400">
          Configure SMTP to enable email notifications for incidents and alerts. Supports Gmail, AWS SES, SendGrid, 
          Mailgun, Office 365, and custom SMTP servers.
        </p>
      </div>

      {/* Provider Configurations */}
      <h2>Provider Configurations</h2>

      <h3>Gmail</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-red-500 my-6">
        <h4 className="font-bold text-slate-900 dark:text-white mb-3">Configuration</h4>
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-green-400 p-4 rounded overflow-x-auto mb-4">
{`SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop  # App Password
FROM_EMAIL=your-email@gmail.com`}
        </pre>
        
        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Setup Steps</h4>
        <ol className="text-sm text-slate-700 dark:text-slate-300 space-y-1 ml-4">
          <li>Enable 2FA on Google account</li>
          <li>Generate App Password: <a href="https://myaccount.google.com/apppasswords" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline">myaccount.google.com/apppasswords</a></li>
          <li>Use 16-character app password (NOT your Gmail password)</li>
        </ol>
      </div>

      <h3>AWS SES</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border-l-4 border-orange-500 my-6">
        <h4 className="font-bold text-slate-900 dark:text-white mb-3">Configuration</h4>
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-orange-400 p-4 rounded overflow-x-auto mb-4">
{`SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USERNAME=AKIAIOSFODNN7EXAMPLE
SMTP_PASSWORD=BAsD1234567890ExampleSMTPPassword
FROM_EMAIL=verified@yourdomain.com`}
        </pre>
        
        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Setup Steps</h4>
        <ol className="text-sm text-slate-700 dark:text-slate-300 space-y-1 ml-4">
          <li>Verify domain in AWS SES</li>
          <li>Request production access (exit sandbox)</li>
          <li>Create SMTP credentials in SES console</li>
          <li>Use SMTP credentials (not IAM keys)</li>
        </ol>
      </div>

      <h3>SendGrid</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-500 my-6">
        <h4 className="font-bold text-slate-900 dark:text-white mb-3">Configuration</h4>
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-blue-400 p-4 rounded overflow-x-auto mb-4">
{`SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USERNAME=apikey
SMTP_PASSWORD=SG.aBcDeFgHiJkLmN...  # API Key
FROM_EMAIL=noreply@yourdomain.com`}
        </pre>
        
        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Setup Steps</h4>
        <ol className="text-sm text-slate-700 dark:text-slate-300 space-y-1 ml-4">
          <li>Create SendGrid account</li>
          <li>Generate API key with "Mail Send" permission</li>
          <li>Username is always "apikey"</li>
          <li>Verify sender identity</li>
        </ol>
      </div>

      <h3>Mailgun</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-l-4 border-purple-500 my-6">
        <h4 className="font-bold text-slate-900 dark:text-white mb-3">Configuration</h4>
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-purple-400 p-4 rounded overflow-x-auto mb-4">
{`SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USERNAME=postmaster@yourdomain.mailgun.org
SMTP_PASSWORD=your-mailgun-password
FROM_EMAIL=noreply@yourdomain.com`}
        </pre>
        
        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Setup Steps</h4>
        <ol className="text-sm text-slate-700 dark:text-slate-300 space-y-1 ml-4">
          <li>Add domain to Mailgun</li>
          <li>Configure DNS records (SPF, DKIM)</li>
          <li>Get SMTP credentials from domain settings</li>
        </ol>
      </div>

      <h3>Office 365</h3>
      <div className="not-prose p-5 rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border-l-4 border-indigo-500 my-6">
        <h4 className="font-bold text-slate-900 dark:text-white mb-3">Configuration</h4>
        <pre className="text-sm bg-slate-900 dark:bg-slate-950 text-indigo-400 p-4 rounded overflow-x-auto mb-4">
{`SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USERNAME=your-email@company.com
SMTP_PASSWORD=your-password
FROM_EMAIL=your-email@company.com`}
        </pre>
        
        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Setup Steps</h4>
        <ol className="text-sm text-slate-700 dark:text-slate-300 space-y-1 ml-4">
          <li>Use your Office 365 email and password</li>
          <li>Enable SMTP AUTH if disabled</li>
          <li>May require app password if MFA enabled</li>
        </ol>
      </div>

      {/* Testing Configuration */}
      <h2>Testing Configuration</h2>
      <div className="not-prose space-y-4 my-6">
        <div className="p-5 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800">
          <div className="flex items-center gap-3 mb-3">
            <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            <h4 className="font-bold text-slate-900 dark:text-white m-0">Send Test Email</h4>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            After configuration, test email delivery:
          </p>
          <ol className="text-sm text-slate-700 dark:text-slate-300 space-y-1 ml-4">
            <li>Go to Settings → Notification Channels</li>
            <li>Create an Email channel</li>
            <li>Click "Test Notification"</li>
            <li>Check your inbox (and spam folder)</li>
          </ol>
        </div>
      </div>

      {/* Troubleshooting */}
      <h2>Troubleshooting</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-red-900 dark:text-red-100 font-semibold mb-1">Authentication Failed</p>
              <p className="text-xs text-red-800 dark:text-red-200 m-0">
                - Verify username and password are correct<br />
                - For Gmail, use App Password, not account password<br />
                - Check if SMTP authentication is enabled
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-yellow-900 dark:text-yellow-100 font-semibold mb-1">Connection Timeout</p>
              <p className="text-xs text-yellow-800 dark:text-yellow-200 m-0">
                - Check firewall rules allow port 587<br />
                - Try port 465 (SSL) or 25 (legacy)<br />
                - Verify SMTP host is correct
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-orange-900 dark:text-orange-100 font-semibold mb-1">Emails Going to Spam</p>
              <p className="text-xs text-orange-800 dark:text-orange-200 m-0">
                - Configure SPF, DKIM, DMARC records<br />
                - Use verified domain for FROM_EMAIL<br />
                - Avoid spammy subject lines
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <h2>Best Practices</h2>
      <div className="not-prose space-y-3 my-6">
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
          <div className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-green-900 dark:text-green-100 m-0">
                <strong>Use Dedicated Email Service:</strong> Don't use personal Gmail for production. Use AWS SES, 
                SendGrid, or similar for reliability and deliverability.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
            <strong>🔒 Secure Credentials:</strong> Store SMTP password in environment variables or secrets manager, 
            never in code or config files.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
          <p className="text-sm text-purple-900 dark:text-purple-100 m-0">
            <strong>📧 Professional FROM Address:</strong> Use noreply@yourdomain.com or alerts@yourdomain.com 
            for better deliverability and branding.
          </p>
        </div>
      </div>

    </div>
  )
}
