// opengl 3.3

// v_pos - in vector 2d
// fragColor - out vector 4d

// center - vector 2d
// scale - float
// iterations - int

void main() {
    vec2 z = v_pos * scale + center;
    vec2 c = z;
    int iter;

    for (iter = 0; iter < iterations; iter++) {
        if (dot(z, z) > 4.0) break;
        z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    }

    float color = float(iter) / float(iterations);
    fragColor = vec4(color, color * 0.5, color * 0.25, 1.0);
}