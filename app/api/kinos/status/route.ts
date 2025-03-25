import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const messageId = searchParams.get('messageId');
    const firstName = searchParams.get('firstName');
    const lastName = searchParams.get('lastName');
    const specialist = searchParams.get('specialist') || 'generalist'; // Get specialist parameter with default
    
    if (!messageId || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Missing required parameters: messageId, firstName, lastName' },
        { status: 400 }
      );
    }
    
    const projectId = `${firstName}${lastName}`;
    
    // Determine the base URL based on environment and specialist
    let baseUrl;
    
    // Use different project path based on specialist type
    if (specialist === 'executive') {
      // For executive coach specialist
      baseUrl = process.env.KINOS_API_URL 
        ? `${process.env.KINOS_API_URL}/projects/strideexecutive/${projectId}/messages/${messageId}`
        : process.env.NODE_ENV === 'development'
          ? `http://localhost:5000/projects/strideexecutive/${projectId}/messages/${messageId}`
          : `https://api.kinos-engine.ai/projects/strideexecutive/${projectId}/messages/${messageId}`;
    } else if (specialist === 'entrepreneur') {
      // For entrepreneur coach specialist
      baseUrl = process.env.KINOS_API_URL 
        ? `${process.env.KINOS_API_URL}/projects/strideentrepreneur/${projectId}/messages/${messageId}`
        : process.env.NODE_ENV === 'development'
          ? `http://localhost:5000/projects/strideentrepreneur/${projectId}/messages/${messageId}`
          : `https://api.kinos-engine.ai/projects/strideentrepreneur/${projectId}/messages/${messageId}`;
    } else if (specialist === 'women') {
      // For women's leadership coach specialist
      baseUrl = process.env.KINOS_API_URL 
        ? `${process.env.KINOS_API_URL}/projects/stridewomen/${projectId}/messages/${messageId}`
        : process.env.NODE_ENV === 'development'
          ? `http://localhost:5000/projects/stridewomen/${projectId}/messages/${messageId}`
          : `https://api.kinos-engine.ai/projects/stridewomen/${projectId}/messages/${messageId}`;
    } else {
      // For generalist (default)
      baseUrl = process.env.KINOS_API_URL 
        ? `${process.env.KINOS_API_URL}/projects/stride/${projectId}/messages/${messageId}`
        : process.env.NODE_ENV === 'development'
          ? `http://localhost:5000/projects/stride/${projectId}/messages/${messageId}`
          : `https://api.kinos-engine.ai/projects/stride/${projectId}/messages/${messageId}`;
    }
    
    // Call the appropriate API to check the status of the message
    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any required API keys or authentication headers here
      },
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`KinOS API status check error (${response.status}): ${errorText}`);
      return NextResponse.json(
        { error: `Failed to check message status: ${response.status}` },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error checking message status:', error);
    return NextResponse.json(
      { error: 'Failed to check message status' },
      { status: 500 }
    );
  }
}
